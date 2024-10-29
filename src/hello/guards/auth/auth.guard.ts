import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// Esto se puede usar para comprobar los roles de usuario, es decir, si la sesión del usuario tiene un rol... continuo

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request

    console.log(request.url);
    
    if (!request.headers['authorization']) return false

    // if (request.url === '/greet') return false

    return true;
  }
}
