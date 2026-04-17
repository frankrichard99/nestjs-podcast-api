import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    //You extract the request object
    const request = context.switchToHttp().getRequest();
    //then extract api key from the request object to validate against somethign else
    const apiKey = request.header('X-API-KEY');

  
    if(apiKey !== 'nest-is-awesome'){
      return false;
    }
    return true;
  }
}
