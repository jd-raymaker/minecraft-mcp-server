import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface ServerConfig {
  host: string;
  port: number;
  username: string;
  auth: 'microsoft' | 'mojang' | 'offline';
}

export function parseConfig(): ServerConfig {
  return yargs(hideBin(process.argv))
    .option('host', {
      type: 'string',
      description: 'Minecraft server host',
      default: 'localhost'
    })
    .option('port', {
      type: 'number',
      description: 'Minecraft server port',
      default: 25565
    })
    .option('username', {
      type: 'string',
      description: 'Bot username',
      default: 'LLMBot'
    })
    .option('auth', {
      type: 'string',
      description: 'Authentication method. microsoft, mojang, or offline',
      default: 'offline'
    })
    .help()
    .alias('help', 'h')
    .parseSync() as unknown as ServerConfig;
}
