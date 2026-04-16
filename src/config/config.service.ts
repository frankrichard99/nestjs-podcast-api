import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    configOne(){
        return "configured one"
    }
    
}
