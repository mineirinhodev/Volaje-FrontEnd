import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-inputs',
  templateUrl: './register-inputs.component.html',
  styleUrls: ['./register-inputs.component.css']
})
export class RegisterInputsComponent {
  @Input() fieldName: string = '';
  fieldValue: string = '';
  responseMessage: string = '';
  @Input() placeholderText: string = '';
  isValid: boolean = false;
  isInvalid: boolean = false;

  constructor(private http: HttpClient) {}


  onBlur() {
    if (!this.fieldValue.trim()) {
      this.responseMessage = 'Campo obrigatório. Preencha antes de verificar a disponibilidade.';
      this.isValid = false;
      this.isInvalid = false;
      return;
    }

    if (this.fieldName === 'phone') {
      // Verificar se o campo 'phone' contém apenas números
      if (!/^\d+$/.test(this.fieldValue)) {
        this.responseMessage = 'O campo phone só pode conter números.';
        this.isValid = false;
        this.isInvalid = true;
        return;
      }
    }

    const apiUrl = `${environment.apiValidationsRegister}?fieldName=${this.fieldName}&fieldValue=${this.fieldValue}`;

    this.http.get<{ exists: boolean }>(apiUrl, {}).subscribe(
      (response) => {
        if (response !== undefined) {
          this.responseMessage = response.exists ? 'Indisponivel' : 'Disponivel';
          this.isValid = !response.exists;
          this.isInvalid = response.exists;
        } else {
          console.error('Resposta inválida do servidor');
          this.responseMessage = 'Erro ao verificar a disponibilidade';
          this.isValid = false;
          this.isInvalid = false;
        }
      },
      (error) => {
        console.error(error);
        this.responseMessage = 'Erro ao verificar a disponibilidade';
        this.isValid = false;
        this.isInvalid = false;
      }
    );
  }
}
