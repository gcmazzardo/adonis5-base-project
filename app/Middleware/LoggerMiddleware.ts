import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Logger from '@ioc:Adonis/Core/Logger'

export default class LoggerMiddleware {
  public async handle({ auth, request }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.user) {
      Logger.error("Logger: Invalid user. A valid 'auth.user' is expected")
    }

    //Format: [auth.user.id] = namespace/route-path = route params
    Logger.info('\n[%d] %s = %o', auth.user?.id, request.ctx?.routeKey, request.params())

    await next()
  }
}
