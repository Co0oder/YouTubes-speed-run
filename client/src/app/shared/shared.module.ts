import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule
	],
	providers: [ApiService]
})
export class SharedModule{}