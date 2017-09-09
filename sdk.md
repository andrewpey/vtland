---
layout: default
title: SDK // VOXEL TYCOON
header: SDK
wrapper: faq
---

## What is it?

It's a tool for you to preview and customize any 3rd-party content (trains, buildings or even trees) in the actual game's environment.

![](/assets/sdk/preview.gif)

## Downloads

### Download for [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK.zip)
### Download for [macOS](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK_Mac.zip)

## Tutorial

First, create a model in your favorite modeling software. We use Blender ❤

For the reference you can use models that came with the download.

![](/assets/sdk/1.png)

 After you're done with the modeling, select a model to ensure nothing unwanted will be exported, and hit Export as `OBJ`:

![](/assets/sdk/2.png)

Ensure that the `Selection only`, `Include UVs` and `Triangulate Faces` options are checked:

![](/assets/sdk/2-1.png)

Set the filename — in this example we use `MyModel.obj` — and save file to `VoxelTycoonSDK/Trains` (if you are creating something related to trains) or `VoxelTycoonSDK/Buildings` (for enything else, like buildings or trees):

![](/assets/sdk/3.png)

Now go to the VoxelTycoonSDK tool and choose `Buildings` or `Trains` from the second dropdown (based on where you've placed your model in the previous step). Then choose your model from the last dropdown:

![](/assets/sdk/4.png)

The SDK will generate a palette texture called `MyModel.png` in the same folder where your `OBJ` file is stored. This palette will be used to to set the coloring for your model.

![](/assets/sdk/4-1.png)

Go back into the modeling software and open UV editing mode:

![](/assets/sdk/5.png)

Load the generated palette texture `MyModel.png` from the directory where you've placed your model (`VoxelTycoonSDK/Buildings` or `VoxelTycoondSDK/Trains`):

![](/assets/sdk/6.png)

![](/assets/sdk/7.png)

![](/assets/sdk/8.png)

Unwrap the model using the colors from the palette. The colors in the palette are not important yet, we just need to map vertices' UVs to the separate colors. You will set up the actual colors in the VoxelTycoonSDK tool later.

![](/assets/sdk/9.png)

After unwrapping has finished, export the model as an `OBJ` again, rewriting your previous `OBJ`.

Go back to the VoxelTycoonSDK tool again. Click through different parts of the model and choose the colors in the color picker on the right bottom corner.

![](/assets/sdk/10.png)

> **Pro Tip** You can pick colors from other parts of the  model by holding `ALT`.

You're done! Feel free to share your work [with us](/contacts).