npx expo start

vv
To run your Expo project on an Android Emulator, follow these steps to make sure your computer's virtual device is ready and connected to Expo:

1. Set Up Android Studio & Emulator (First Time Only)
If you haven't set up an emulator yet, you need Android Studio installed on your computer:

Open Android Studio and go to the Device Manager (or Virtual Device Manager).

Click Create Device, choose a phone (like Pixel 8), and download a recent system image (like Android 14 or 15).

Finish the setup and click the Play button next to your virtual device to launch the emulator on your desktop.

2. Run the Commands in Your Project Terminal
Once your Android Emulator is open and running on your screen:

Start the Expo server inside your my-expo-app project folder:

Bash
npx expo start
Trigger the Android build:
Once the terminal finishes bundling and displays the interactive menu, press the a key on your keyboard.

Plaintext
› Press a │ open on Android
› Press i │ open on iOS simulator
› Press w │ open on web
What happens next?
Expo will automatically detect your running emulator.

It will install the Expo Go app directly onto the emulator for you (this might take a minute on the first run).

The app will automatically open, fetch your code, and render your user list.

💡 Tip: If you make changes to your code in your editor, the emulator will automatically refresh in real-time! If it ever gets stuck, click inside your terminal and press r to force reload it.