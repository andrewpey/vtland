---
layout: default
title: SDK // VOXEL TYCOON
header: SDK
wrapper: faq
---

## What is it?

Tool for preview and customize custom 3rd-party content (trains, buildings or even trees) in the actual game environment.

![](/assets/sdk/preview.gif)

## Downloads

### Download for [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK.zip)
### Download for [macOS](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK_Mac.zip)

## Tutorial

First, create a model in your favorite modeling software. We use Blender ❤

For the reference you can use models that came in the downloaded package.

![](/assets/sdk/1.png)

 After you've done with the modeling, select a model to ensure nothing unwanted will be exported, and hit Export as `OBJ`:

![](/assets/sdk/2.png)

Check `Selection only`, then set the filename, for example, `MyModel.obj`. Save it to `VoxelTycoonSDK/Trains` (if you creating something related to trains) или `VoxelTycoonSDK/Buildings` (for enything else, like buildings or trees):

![](/assets/sdk/3.png)

Now go to the VoxelTycoonSDK tool and choose `Buildings` or `Trains` from the second dropdown (based on where you've placed your model in the previous step). Then choose your model from the last dropdown:

![](/assets/sdk/4.png)

At this moment tool will generate palette texture `MyModel.png` in the same folder where your `MyModel.obj` file is stored. This palette will be used to to setup your model for coloring.

![](/assets/sdk/4-1.png)

Go back to modeling software and open UV editing mode:

![](/assets/sdk/5.png)

Load generated palette texture `MyModel.png` from the directory where you've placed your model (`VoxelTycoonSDK/Buildings` or `VoxelTycoondSDK/Trains`):

![](/assets/sdk/6.png)

![](/assets/sdk/7.png)

![](/assets/sdk/8.png)

Unwrap model using colors from palette. Colors in the palette are not important for now, we just need to map vertices' UVs to separate colors. You will set up actual colors at the VoxelTycoonSDK tool later.

![](/assets/sdk/9.png)

After unwrapping has done, export model as `OBJ` again, rewriting `MyModel.obj`.

Go back to VoxelTycoonSDK tool again. Click through different parts of the model and choose colors in the color picker at the right bottom corner.

![](/assets/sdk/10.png)

You've done! Feel free to share your work with us in the [social networks](/contacts) of your choice.