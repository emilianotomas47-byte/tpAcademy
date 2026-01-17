import { Injectable } from '@nestjs/common';

// @Injectable() marks this class as a provider that can be managed by the NestJS dependency injection system.
@Injectable()
export class UserService {

    // This method returns a simple greeting message.
    getCc(): string {
        return 'Hola! Hector Frias, saludos desde el servicio de usuario.';
    }
}
