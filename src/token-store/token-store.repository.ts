import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TokenStoreRepository {
  private filename = 'token-store.json';

  async getTokens() {
    const fileData = await readFile(this.filename, 'utf-8');
    return JSON.parse(fileData);
  }

  async getToken(id: string) {
    const tokens = await this.getTokens();
    const token = tokens[id];

    if (!token) {
      throw new NotFoundException(`Token with id ${id} not found`);
    }

    return token;
  }

  async saveToken(token: string) {
    const tokens = await this.getTokens();
    const id = uuidv4();

    tokens[id] = token;

    await writeFile(this.filename, JSON.stringify(tokens, null, 2));

    return id;
  }

  async deleteToken(id: string) {
    const tokens = await this.getTokens();

    if (!tokens[id]) {
      throw new NotFoundException(`Token with id ${id} not found`);
    }

    delete tokens[id];

    await writeFile(this.filename, JSON.stringify(tokens, null, 2));
  }
}
