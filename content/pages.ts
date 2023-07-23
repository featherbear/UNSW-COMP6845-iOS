import resources from "./sections/00-resources.svx";
import welcome from "./sections/01-welcome.svx";
import secureBoot from "./sections/02-secure-boot-chain.svx";
import iosFilesystem from "./sections/03-ios-filesystem.svx";
import iosSandbox from "./sections/04-ios-sandbox.svx";
import imageAcquisition from "./sections/05-image-acquisition.svx";
import jailbreaking from "./sections/06-jailbreaking.svx";
import passwordChallenges from "./sections/07-password-challenges.svx";
import artifacts from "./sections/08-artifacts.svx";
import lab from "./sections/09-lab.svx";

const pages = [
  ["Resources", resources],
  ["Introduction", welcome],
  ["Secure Boot Chain", secureBoot],
  ["Filesystem", iosFilesystem],
  ["Sandbox", iosSandbox],
  ["Image Acquisition", imageAcquisition],
  ["Jailbreaking", jailbreaking],
  ["Password Challenges", passwordChallenges],
  ["Artifacts", artifacts],
  ["Lab", lab],
] satisfies [string, any][];

export default pages