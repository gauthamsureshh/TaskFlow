import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedService } from '../Service/logged.service';
import { ToastrService } from 'ngx-toastr';

export const checkauthGuard: CanActivateFn = (route, state) => {


  const router=inject(Router);
  const logService=inject(LoggedService);
  const toast=inject(ToastrService);

  if(logService.getToken()){
    return true;
  }
  else{
    
    toast.warning('Login');
    router.navigate(['auth']);
    return false;
    
  }
};
