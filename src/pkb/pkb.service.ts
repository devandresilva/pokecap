import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class PkbService {
    constructor(@InjectConnection() private connection: Connection) {}
}
