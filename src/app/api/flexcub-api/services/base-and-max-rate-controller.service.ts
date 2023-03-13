/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BaseAndMaxRate } from '../models/base-and-max-rate';

@Injectable({
  providedIn: 'root',
})
export class BaseAndMaxRateControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation insertBaseAndMaxRateCard
   */
  static readonly InsertBaseAndMaxRateCardPath = '/v1/baseAndMaxRateCard/InsertData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insertBaseAndMaxRateCard()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertBaseAndMaxRateCard$Response(params: {
    context?: HttpContext
    body: BaseAndMaxRate
  }
): Observable<StrictHttpResponse<BaseAndMaxRate>> {

    const rb = new RequestBuilder(this.rootUrl, BaseAndMaxRateControllerService.InsertBaseAndMaxRateCardPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseAndMaxRate>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `insertBaseAndMaxRateCard$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertBaseAndMaxRateCard(params: {
    context?: HttpContext
    body: BaseAndMaxRate
  }
): Observable<BaseAndMaxRate> {

    return this.insertBaseAndMaxRateCard$Response(params).pipe(
      map((r: StrictHttpResponse<BaseAndMaxRate>) => r.body as BaseAndMaxRate)
    );
  }

  /**
   * Path part for operation getBaseAndMaxRateCardData
   */
  static readonly GetBaseAndMaxRateCardDataPath = '/v1/baseAndMaxRateCard/getData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBaseAndMaxRateCardData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBaseAndMaxRateCardData$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BaseAndMaxRate>>> {

    const rb = new RequestBuilder(this.rootUrl, BaseAndMaxRateControllerService.GetBaseAndMaxRateCardDataPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BaseAndMaxRate>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBaseAndMaxRateCardData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBaseAndMaxRateCardData(params?: {
    context?: HttpContext
  }
): Observable<Array<BaseAndMaxRate>> {

    return this.getBaseAndMaxRateCardData$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BaseAndMaxRate>>) => r.body as Array<BaseAndMaxRate>)
    );
  }

}
