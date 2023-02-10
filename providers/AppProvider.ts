import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { CustomSnakeCaseNamingStrategy } from '../start/CustomSnakeCaseNamingStrategy'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const OrmService = await import('@ioc:Adonis/Lucid/Orm')
    OrmService.BaseModel.namingStrategy = new CustomSnakeCaseNamingStrategy()
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
