import { Context, Schema } from 'koishi'

export function apply(ctx: Context) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    ctx.i18n.define('zh-CN-ZAKO-YURI', require('./zh-CN-ZAKO-YURI.yml'))
}

export interface Config {}

export const filter = false
export const Config = Schema.object({})

export const name = 'locale-zh-CN-ZAKO-YURI'
