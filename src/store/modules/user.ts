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

  @Action({ rawError: true })
  public async initExportUsers(params: RandomUserParams): Promise<void> {
    try {
      const urlParams = `?seed=${params.seed}&page=${params.page}&results=${params.results}&inc=${params.inc}&format=csv&dl`;

      const exportData = await apiRequest.get(`/${urlParams}`);
      const fileBlob = new Blob([exportData.data], { type: "text/csv" });
      const objectUrl = window.URL.createObjectURL(fileBlob);
      const link = document.createElement("a");

      link.href = objectUrl;
      link.style.display = "none";
      link.download = `kxch-${Date.now()}.csv`;

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(objectUrl);
      link.remove();
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export default UserModule;
