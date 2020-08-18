import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Validacao {
  constructor() {

  }

    public validaCpf(cpf: string): boolean {
      if (cpf == null) {
          return false;
      }
      if (cpf.length !== 11) {
          return false;
      }
      // tslint:disable-next-line: triple-equals
      // tslint:disable-next-line: max-line-length
      if ((cpf === '00000000000') ||
         (cpf === '11111111111') ||
         (cpf === '22222222222') ||
         (cpf === '33333333333') ||
         (cpf === '44444444444') ||
         (cpf === '55555555555') ||
         (cpf === '66666666666') ||
         (cpf === '77777777777') ||
         (cpf === '88888888888') ||
         (cpf === '99999999999')) {
          return false;
      }
      let numero = 0;
      let caracter = '';
      const numeros  = '0123456789';
      let j  = 10;
      let somatorio = 0;
      let resto  = 0;
      let digito1  = 0;
      let digito2  = 0;
      let cpfAux  = '';
      cpfAux = cpf.substring(0, 9);
      for (let i = 0; i < 9; i++) {
          caracter = cpfAux.charAt(i);
          if (numeros.search(caracter) === -1) {
              return false;
          }
          numero = Number(caracter);
          somatorio = somatorio + (numero * j);
          j--;
      }
      resto = somatorio % 11;
      digito1 = 11 - resto;
      if (digito1 > 9) {
          digito1 = 0;
      }
      j = 11;
      somatorio = 0;
      cpfAux = cpfAux + digito1;
      for (let i = 0; i < 10; i++) {
          caracter = cpfAux.charAt(i);
          numero = Number(caracter);
          somatorio = somatorio + (numero * j);
          j--;
      }
      resto = somatorio % 11;
      digito2 = 11 - resto;
      if (digito2 > 9) {
          digito2 = 0;
      }
      cpfAux = cpfAux + digito2;
      // tslint:disable-next-line: triple-equals
      if (cpf != cpfAux) {
          return false;
      } else {
          return true;
      }
    }

    public isValidDate(str) {
        const parts = str.split('/');
        if (parts.length < 3) {
            return false;
        } else {
            // tslint:disable-next-line: radix
            const day = parseInt(parts[0]);
            // tslint:disable-next-line: radix
            const month = parseInt(parts[1]);
            // tslint:disable-next-line: radix
            const year = parseInt(parts[2]);
            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                return false;
            }
            if (day < 1 || year < 1) {
                return false;
            }
            if (month > 12 || month < 1) {
                return false;
            }
            if ((month === 1 || month === 3 || month === 5 ||
                month === 7 || month === 8 || month === 10 ||
                month === 12) && day > 31) {
                return false;
            }
            if ((month === 4 || month === 6 || month === 9 ||
                month === 11 ) && day > 30) {
                return false;
            }
            if (month ===  2) {
                if (((year % 4) === 0 && (year % 100) !== 0) ||
                    ((year % 400) === 0 && (year % 100) === 0)) {
                    if (day > 29) {
                        return false;
                    }
                } else {
                    if (day > 28) {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}
