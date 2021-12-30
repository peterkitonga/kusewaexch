import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import router from "@/router";

@Module({ namespaced: true })
class AuthModule extends VuexModule {
  public isAuthenticated = false;

  get authenticationStatus(): boolean {
    return this.isAuthenticated;
  }

  @Mutation
  public setAuthenticationStatus(authenticationStatus: boolean): void {
    this.isAuthenticated = authenticationStatus;
  }

  @Action({ rawError: true })
  public initSignInUser(): void {
    this.context.commit("setAuthenticationStatus", true);
    router.push({ name: "app.dashboard" });
  }

  @Action({ rawError: true })
  public initLogoutUser(): void {
    this.context.commit("setAuthenticationStatus", false);
    router.push({ name: "app.home" });
  }
}

export default AuthModule;
