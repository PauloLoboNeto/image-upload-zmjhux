import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { BrowserQRCodeReader, BrowserQRCodeSvgWriter } from "@zxing/library";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
   uploadFile(event) {
    let codeReader = new BrowserQRCodeReader();
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let imageUrl: any = reader.result;
         codeReader
          .decodeFromImage(undefined, imageUrl)
          .then((result: any) => {console.info(result), this.generateQr()})
          .catch(result => console.info(result));
      };
    }
  }
  ngOnInit(){
    this.generateQr()
  }
  bb: any;

  generateQr(){
    let codeReader = new BrowserQRCodeReader();
    let codeWriter =  new BrowserQRCodeSvgWriter();
    const element = document.getElementById('imgs');
    codeWriter.writeToDom(element, 'nome: Paulo, Sobrenome: Lobo', 300, 300);
    const svgElement =  codeWriter.write('nome: Paulo, Sobrenome: Lobo', 300, 300);
    console.log()
  }
}
