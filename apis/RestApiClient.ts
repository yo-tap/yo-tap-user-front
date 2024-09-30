import { applicationProperties } from '@/constants/applicationProperties'
import { Configuration, V1Api } from '../generated/rest-api'

export class RestApiClient {
  private config = new Configuration({
    basePath: applicationProperties.API_REST_URL,
  })

  public v1 = new V1Api(this.config)
}
