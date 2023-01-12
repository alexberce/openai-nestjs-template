import { compare, hash } from 'bcrypt';

export class EncryptionService {
  private static SALT_ROUNDS = 10;

  static hashPassword(password: string): Promise<string> {
    return hash(password, EncryptionService.SALT_ROUNDS);
  }

  static validatePassword(password: string, matchAgainst: string): Promise<boolean> {
    return compare(password, matchAgainst);
  }
}
