import * as dotenv from 'dotenv';
dotenv.config();

export const configs = {
    GUILD_ID: process.env.GUILD_ID || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    CLIENT_SECRET: process.env.CLIENT_SECRET || '',
    BOT_TOKEN: process.env.BOT_TOKEN || '',
    WHITELISTED_USERS: process.env.WHITELISTED_USERS?.split(',') || [],
    WHITELISTED_ROLES: process.env.WHITELISTED_ROLES?.split(',') || [],
};