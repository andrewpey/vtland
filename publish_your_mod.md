---
layout: default
title: Publish your mod // VOXEL TYCOON
header: How to publish your mod
wrapper: faq
---

This step-by-step guide is supposed for mod creators who want to feature their creations on in-game mods gallery. Like this:

<img src="/assets/sdk/publish_your_mod/20180514-192535.png" />

> **Disclaimer** Current implementation is temporary. After the release of the game on Steam, we will incorporate Steam Workshop support, so the publishing process may change.

## Obtain credentials

If you want to became an publisher, you should obtain credentials so our servers can identify you as the Author. We do not provide user interface for register at the moment, so please contact **@devs** on [Discord](//discord.gg/64KPWd5).

You will receive `identity.json` file that is your key to publishing access. Put the key into the root of `Content` folder. Next time the game run it will know that you are an Author.

> **Do not share identity file with anyone**, since any person that have this key can publish, update and remove your mods.

## Prepare mod for publishing

Actually, at this point your mod already can be published. But, probably, you want to add some final touches to it.

### Add preview image

Put `preview.png` into the root of your mod folder. To be properly scaled its dimenstions should be `184х110`.

### Set custom title and description

Put `pack.json` into the root of your mod folder. Its contents should be like:

```json
{
    "Title" : "My awesome mod",
    "Description" : "This mod contains some cool stuff!"
 }
```

## Publish, update and unpublish

Just hit on your mod in **installed** tab and choose an appropriate action.

<img src="/assets/sdk/publish_your_mod/20180514-193710.png" style="width: auto"/>

> You can publish only mods that are not tracked as **installed**, i.e. was not installed from the gallery but manually created by you.

If you are updating already published mod, other users that have this mod installed will be able to see at Mod Browser that  an update for this mod is available.

## Limits

To prevent our storages to overflow, we temporary restict how many packs you can publish. The limits can be seen at [https://voxeltycoon-mods.herokuapp.com/limits?uid=`your_secret_key`](https://voxeltycoon-mods.herokuapp.com/limits?uid=your_secret_key), where secret key is the one stored in `identity.json` file.