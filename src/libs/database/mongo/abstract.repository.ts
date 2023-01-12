import { NotFoundException } from '@nestjs/common';
import { AbstractDocument } from './abstract.schema';
import { FilterQuery, Model, Types, UpdateQuery, SaveOptions, Connection } from 'mongoose';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected constructor(
    public readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async create(
    document: Partial<Omit<TDocument, '_id'>>,
    options?: SaveOptions,
  ): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (
      await createdDocument.save(options)
    ).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery);

    if (!document) {
      throw new NotFoundException('Document not found.');
    }

    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const options = { new: true };
    const document = await this.model.findOneAndUpdate(filterQuery, update, options);

    if (!document) {
      throw new NotFoundException('Document not found.');
    }

    return document;
  }

  async upsert(
    filterQuery: FilterQuery<TDocument>,
    document: Partial<TDocument>,
  ) {
    const options = { upsert: true, new: true };
    return this.model.findOneAndUpdate(filterQuery, document, options);
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery);
  }

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }
}
