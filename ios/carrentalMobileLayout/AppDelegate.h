#import "AppDelegate.h"
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <React/RCTRootView.h>
#import "RNSplashScreen.h"  // here

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code

    [RNSplashScreen show];  // here
    // or
    //[RNSplashScreen showSplash:@"LaunchScreen" inRootView:rootView];
    return YES;
}

@property (nonatomic, strong) UIWindow *window;

@end
