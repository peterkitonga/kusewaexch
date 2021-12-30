import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { RandomUser } from "@/types";
import apiRequest from "@/api";

@Module({ namespaced: true })
class UserModule extends VuexModule {
  public fetchedUsers: RandomUser[] = [];

  @Mutation
  public setFetchedUsers(data: { results: RandomUser[] }): void {
    this.fetchedUsers = data.results;
  }

  @Action({ rawError: true })
  public async fetchUsers(params: unknown): Promise<void> {
    try {
      const users = await apiRequest.get("/", {
        params,
      });

      this.context.commit("setFetchedUsers", users.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export default UserModule;
