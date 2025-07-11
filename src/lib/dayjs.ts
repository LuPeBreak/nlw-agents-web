import lib from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.locale(ptBR)
lib.extend(relativeTime)

export const dayjs = lib
