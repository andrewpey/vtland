---
layout: default
style: 
title: Publish your mod // VOXEL TYCOON
header: How to publish your mod
permalink: publish-mod
---

This step-by-step guide is intended for mod creators who want to feature their creations on the in-game Mod Gallery. Like this:

<img src="/assets/sdk/publish_your_mod/20180514-192535.png" />

> **Note**: Current implementation is temporary. After the release of the game on Steam, we will incorporate Steam Workshop support, so the publishing process may change.

## Obtain credentials

If you want to become a publisher, you should obtain credentials so our servers can identify you as an Author. We do not have a user interface for registration at the moment, so please contact **@devs** on our [Discord server](//discord.gg/64KPWd5).


You will receive an `identity.json` file - this is your key to publishing access. Put the file into the root of your `Content/` folder. Next time the game runs, it will know that you are an Author.

> **Important:** Do not share identity file with anyone. If you do, any person that has it can publish, update or remove your mods in the Gallery.

## Prepare mod for publishing

Actually, at this point your mod already can be published. But you probably want to add some final touches to it first.

### Add preview image

Take a screenshot of your mod in action, and save it as `preview.png`. Drop the image into your mod's root folder. To be properly scaled in the Gallery, its dimensions should be `184х110` pixels.

### Set custom title and description

Create a new `.txt` file, rename it to `pack.json`, and place it in your mod's root folder. Its contents should be set up as follows:

```json
{
    "Title" : "My awesome mod",
    "Description" : "This mod contains some cool stuff!"
 }
```

## Publish, update and unpublish

Just click on your mod in the **Installed** tab, and choose the appropriate action.

<img src="/assets/sdk/publish_your_mod/20180514-193710.png" style="width: auto"/>

> You can publish only mods that are not tracked as **installed**, i.e. was not downloaded from the gallery but manually placed to `Content/` by you.

If you are updating a mod that is already published, users that have it installed will see that an update is available for it.

## Limits

To prevent our servers from being completely filled with content, we're temporarily restricting how many packs users can publish. Your limit can be seen at  [https://voxeltycoon-mods.herokuapp.com/limits?uid=`your_secret_key`](https://voxeltycoon-mods.herokuapp.com/limits?uid=your_secret_key), where "your_secret_key" is the one stored in your specific `identity.json` file.