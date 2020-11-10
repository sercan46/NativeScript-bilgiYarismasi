import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class SorularService {

    constructor(public http: HttpClient) {}

    fetchSoru(): any {
        return this.http
            .get("https://opentdb.com/api.php?amount=1&type=multiple" )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }
}
