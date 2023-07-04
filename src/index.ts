import { ChannelType, Client, Events, GatewayIntentBits } from "discord.js";
import { configs } from "./configs";

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers, // MAKE SURE TO ADD THIS
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.login(configs.BOT_TOKEN);

client.on(Events.ClientReady, async (client) => {
  console.log("client ready");
  const guild = client.guilds.cache.get(configs.GUILD_ID);


  console.log("fetching channels");
  const channels = await guild.channels.fetch();
  channels.forEach(async (channel) => {
    console.log(channel.name, channel.id);

    if (channel.type === ChannelType.GuildText) {

      const messages = channel.messages.fetch();


    } else if (channel.type === ChannelType.GuildVoice) {
      console.log("voice channel");
      const messages = channel.messages.fetch();
    } else if (channel.type === ChannelType.GuildForum) {

    }


    // get public and private threads
  });



  console.log("fetching users");
  let res = await guild.members.fetch();
  const now = Date.now();
  res.forEach((member) => {
    console.log(member.user.username, member.joinedAt);
  });

  console.log("done");
});
