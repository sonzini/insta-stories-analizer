import { Injectable } from '@nestjs/common';
import { IgApiClient } from 'instagram-private-api';

@Injectable()
export class InstagramRepository {
  private readonly ig;

  constructor() {
    this.ig = new IgApiClient();
  }

  deserialize(serialized: string) {
    this.ig.state.deserialize(serialized);
  }

  async login(username: string, password: string) {
    this.ig.state.generateDevice(username);
    await this.ig.simulate.preLoginFlow();
    await this.ig.account.login(username, password);
    const serialized = await this.ig.state.serialize();
    // await this.ig.simulate.postLoginFlow();

    return serialized;
  }

  async logout() {
    await this.ig.account.logout();
  }

  async getProfileInfo() {
    const profile = await this.ig.account.currentUser();

    return profile;
  }

  // async getProfilePicture() {
  //   const profile = await this.getProfileInfo();

  //   return profile.profile_pic_url;
  // }

  // async getPosts() {
  //   const postsFeed = this.ig.feed.user(await this.ig.user.getId());
  //   const posts = await postsFeed.items();

  //   return posts;
  // }

  // async getPost(id: string) {
  //   const post = await this.ig.media.info(id);

  //   return post;
  // }

  // async getPostLikes(id: string) {
  //   const post = await this.ig.media.likers(id);

  //   return post;
  // }
}
