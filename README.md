## The Lava Component library

To run the "catalog" and preview all components, follow these steps:

1. `git clone` the repo (be sure to do this *outside* of any other repository)
2. `npm install`
3. `npx expo start --tunnel`
4. Install "Expo Go" on an iOS device, it's in the public Apple App Store. Then scan the QR code you see on screen. Press "c" in the expo terminal window if you need the QR code to re-appear.
5. Press "w" in the expo terminal window to launch a web browser of this.


#### Creating a new component

- Within the `/components` directory, ensure there is a single file for the component. Create any sub-directories or sub-components that you need as you are building this component.
- Within the `/screens` directory, ensure there is a single file for this component which represents it's screen. On the screen drop multiple instances of the component showing the different ways it can be used.
- Within `App.tsx`, add a button which links to this screen.

..
