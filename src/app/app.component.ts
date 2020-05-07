import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { BrowserQRCodeReader } from "@zxing/library";
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
          .then((result: any) => console.info(result))
          .catch(result => console.info(result));
      };
    }
  }
}
