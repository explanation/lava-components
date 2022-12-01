export interface Game {
  /** Game's thumbnail url
   *
   * Example: https://domain.com/images/image.png
   */
  imageUrl: string
  /** Game's name/title
   *
   * Example: PHILIPS Tower Defense Simulator
   */
  name: string
  /** Number of likes by friends
   *
   * Example: 10
   */
  likesByFriends?: number
  /** Likes on the platform:
   *
   * Example: 7200000
   */
  likesOnPlatform?: number
}
