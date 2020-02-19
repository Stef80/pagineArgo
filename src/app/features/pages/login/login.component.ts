import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Utente } from '../../models/utente';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  //utente: Utente;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    //this.Loggati('user', 'password');
  }

  doLogin(form: NgForm): void {
    //let params = new HttpParams();
    console.log(form.form.value, "")
    //let data = new FormData();
    //params
    //.set('id','0')
    //.set('username', form.form.value.username)
    //.set('password', form.form.value.password);

    /*
  let obj = {
    username: form.form.value.username,
    password: form.form.value.password
  };
  */

    //this.utente.id = 0;
    //this.utente.username = form.form.value.username;
    //this.utente.password = form.form.value.password;

    //const loginForm: FormData = new FormData();
    //loginForm.append('username', form.form.value.username);
    //loginForm.append('password', form.form.value.password);

    let username = form.form.value.username;
    let password = form.form.value.password;

    //comm this.http.post("http://localhost:8080/login", (form.form.value.username, form.form.value.password))
    //this.http.post<Utente>('http://localhost:8080/login', this.utente)
    /*
      ,{
        headers: {
          'Content-Type': 'application/json',
          withCredential: 'true'
        }, params: params
      })
    */

    //.pipe(
    //  map(risp => {
    //  localStorage.setItem('logged', JSON.stringify(risp));
    //  return risp;
    //}))


    //comm .subscribe(risp => { this.router.navigate(['/modulo']), console.log('risp: ', risp) }, error => { alert('credenziali non valide'); console.error(error) })console.log(form.form.value)


    //const headers = new HttpHeaders ({Authorization: 'user ' + btoa(form.form.value.username  + form.form.value.password)});
    this.http.post('http://localhost:8080/login', { "content-type": ["application/json", form.form.value.username, form.form.value.password] })
     
      .subscribe(risp => { this.router.navigate(['/modulo']) }, error => { alert('credenziali non valide'); console.error(error) }); console.log(form.form.value)
  }

 
}
