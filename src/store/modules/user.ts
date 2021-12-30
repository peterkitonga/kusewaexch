import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { RandomUser, RandomUserParams, RandomUserInfo } from "@/types";
import apiRequest from "@/api";

@Module({ namespaced: true })
class UserModule extends VuexModule {
  public fetchedUsers: RandomUser[] = [];
  public fetchedUsersInfo!: RandomUserInfo;

  get fetchedUserData(): RandomUser[] {
    return this.fetchedUsers;
  }

  get fetchedUserInfo(): RandomUserInfo {
    return this.fetchedUsersInfo;
  }

  @Mutation
  public setFetchedUsers(data: RandomUser[]): void {
    this.fetchedUsers = data;
  }

  @Mutation
  public setFetchedUsersInfo(data: RandomUserInfo): void {
    this.fetchedUsersInfo = data;
  }

  @Action({ rawError: true })
  public async initFetchUsers(params: RandomUserParams): Promise<void> {
    try {
      const users = await apiRequest.get("/", {
        params,
      });

      this.context.commit("setFetchedUsers", users.data.results);
      this.context.commit("setFetchedUsersInfo", users.data.info);
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export default UserModule;
