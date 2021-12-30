<template>
  <main>
    <section class="dshb-info">
      <div class="container">
        <div class="row row--gutter">
          <div class="col-6 col-sm-12">
            <div class="dshb-info__timer">
              <h3 class="heading-three mb-20">Countdown to Christmas</h3>
              <base-timer date="25 Dec 2022 00:00:00"></base-timer>
            </div>
            <base-card class="dshb-info__name-card card--primary">
              <template v-slot:body>
                <div>
                  <span class="text-primary text-bold mb-20"
                    >Your Drawn Name</span
                  >
                  <h3 class="heading-three text-primary text-uppercase mb-20">
                    John Doe
                  </h3>
                  <router-link class="dshb-info__name-card-link" to="#wishlist"
                    >View Wishlist</router-link
                  >
                </div>
                <span class="dshb-info__name-card-img"></span>
              </template>
            </base-card>
          </div>
          <div class="col-6 col-sm-12">
            <h3 class="heading-three mb-20">My Wishlist</h3>
            <base-card class="dshb-info__wishlist-card">
              <template v-slot:body>
                <img
                  src="../assets/images/jpg/pexels-nuno-campos-9620477.jpg"
                  alt="GXT 105 Izza"
                  class="dshb-info__wishlist-card-img"
                />
                <div class="dshb-info__wishlist-card-content">
                  <p class="dshb-info__wishlist-card-title mb-10">
                    <span>GXT 105 Izza</span>
                    <span class="text-primary">$ 20</span>
                  </p>
                  <p>Wired gaming mouse</p>
                </div>
              </template>
            </base-card>
            <base-card class="dshb-info__wishlist-card">
              <template v-slot:body>
                <img
                  src="../assets/images/jpg/pexels-rodnae-productions-7915211.jpg"
                  alt="Keychron K2"
                  class="dshb-info__wishlist-card-img"
                />
                <div class="dshb-info__wishlist-card-content">
                  <p class="dshb-info__wishlist-card-title mb-10">
                    <span>Keychron K2</span>
                    <span class="text-primary">$ 22</span>
                  </p>
                  <p>Wireless mechanical keyboard</p>
                </div>
              </template>
            </base-card>
            <base-card class="dshb-info__wishlist-card">
              <template v-slot:body>
                <img
                  src="../assets/images/jpg/pexels-sound-on-3394656.jpg"
                  alt="Sony MX 1000"
                  class="dshb-info__wishlist-card-img"
                />
                <div class="dshb-info__wishlist-card-content">
                  <p class="dshb-info__wishlist-card-title mb-10">
                    <span>Sony MX 1000</span>
                    <span class="text-primary">$ 30</span>
                  </p>
                  <p>Wireless noise-cancelling headphones</p>
                </div>
              </template>
            </base-card>
          </div>
        </div>
      </div>
    </section>
    <section class="dshb-elves">
      <div class="container">
        <h3 class="dshb-elves__title heading-three">Kitonga's Elves</h3>
        <div class="dshb-elves__actions">
          <div class="dshb-elves__actions-left">
            <base-dropdown
              id="column-select"
              label="Column Select"
              button-color="primary"
              class="mr-20"
            >
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="picture_column"
                  label="Picture"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.picture"
                  :input-value="forms.columns.fields.picture ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="name_column"
                  label="Name"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.name"
                  :input-value="forms.columns.fields.name ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="email_column"
                  label="Email"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.email"
                  :input-value="forms.columns.fields.email ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="phone_column"
                  label="Phone"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.phone"
                  :input-value="forms.columns.fields.phone ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="gender_column"
                  label="Gender"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.gender"
                  :input-value="forms.columns.fields.gender ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="dob_column"
                  label="Age"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.dob"
                  :input-value="forms.columns.fields.dob ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="location_column"
                  label="Location"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.location"
                  :input-value="forms.columns.fields.location ? 'on' : ''"
                ></base-input>
              </li>
              <li class="dropdown__menu-item">
                <base-input
                  type="checkbox"
                  name="registered_column"
                  label="Registered"
                  :rules="{ required: false }"
                  v-model="forms.columns.fields.registered"
                  :input-value="forms.columns.fields.registered ? 'on' : ''"
                ></base-input>
              </li>
            </base-dropdown>
            <button class="btn btn--primary" @click="onExportCSV">
              Export&nbsp;<i class="bi bi-cloud-arrow-down-fill"></i>
            </button>
          </div>
          <div class="dshb-elves__actions-right">
            <base-select
              class="mr-10"
              name="search_column"
              :rules="{ required: false }"
              v-model="forms.search.fields.column"
              :input-value="forms.search.fields.column"
            >
              <option value="gender" selected>Gender</option>
              <option value="location">Location</option>
            </base-select>
            <base-input
              type="text"
              name="search_query"
              :placeholder="`Enter keyword for ${forms.search.fields.column}`"
              :rules="{ required: false }"
              v-model="forms.search.fields.query"
              :input-value="forms.search.fields.query"
            ></base-input>
          </div>
        </div>
        <base-table
          class="dshb-elves__table"
          :fields="fields"
          :data="fetchedUserData"
        >
          <template v-slot:col_picture="{ row }">
            <img
              v-if="row.picture"
              :src="row.picture.large"
              :alt="row.name.first"
              class="dshb-elves__table-img"
            />
          </template>
          <template v-slot:col_name="{ row }">
            <span v-if="row.name">{{
              `${row.name.first ? row.name.first : ""} ${row.name.last}`
            }}</span>
          </template>
          <template v-slot:col_dob="{ row }">
            <span v-if="row.dob">{{ row.dob.age }}</span>
          </template>
          <template v-slot:col_location="{ row }">
            <span v-if="row.location">{{
              `${row.location.country}, ${row.location.city}`
            }}</span>
          </template>
          <template v-slot:col_registered="{ row }">
            <span v-if="row.registered">{{ row.registered.age }}</span>
          </template>
        </base-table>
        <div class="pagination mt-40">
          <button class="pagination__btn" @click="onPaginatePrevious">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button
            :class="[
              'pagination__btn',
              pagination.current_page === 1 ? 'pagination__btn--active' : '',
            ]"
            @click="onPaginateData(1)"
          >
            1
          </button>
          <button
            :class="[
              'pagination__btn',
              pagination.current_page === 2 ? 'pagination__btn--active' : '',
            ]"
            @click="onPaginateData(2)"
          >
            2
          </button>
          <button
            :class="[
              'pagination__btn',
              pagination.current_page === 3 ? 'pagination__btn--active' : '',
            ]"
            @click="onPaginateData(3)"
          >
            3
          </button>
          <button
            :class="[
              'pagination__btn',
              pagination.current_page === 4 ? 'pagination__btn--active' : '',
            ]"
            @click="onPaginateData(4)"
          >
            4
          </button>
          <button
            :class="[
              'pagination__btn',
              pagination.current_page === 5 ? 'pagination__btn--active' : '',
            ]"
            @click="onPaginateData(5)"
          >
            5
          </button>
          <button class="pagination__btn" @click="onPaginateNext">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import {
  RandomUser,
  RandomUserParams,
  RandomUserInfo,
  DynamicFields,
} from "@/types";
import { namespace } from "vuex-class";

import BaseTable from "@/components/BaseTable.vue";
import BaseTimer from "@/components/BaseTimer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";

const User = namespace("user");

@Component({
  components: {
    BaseTable,
    BaseTimer,
    BaseCard,
    BaseDropdown,
    BaseInput,
    BaseSelect,
  },
})
export default class Dashboard extends Vue {
  public fields = [
    {
      name: null,
      field: "picture",
      width: "10rem",
    },
    {
      name: "Name",
      field: "name",
    },
    {
      name: "Email",
      field: "email",
    },
    {
      name: "Phone",
      field: "phone",
    },
    {
      name: "Gender",
      field: "gender",
    },
    {
      name: "Age",
      field: "dob",
    },
    {
      name: "Location",
      field: "location",
      width: "35rem",
    },
    {
      name: "Registered",
      field: "registered",
    },
  ];

  public forms = {
    columns: {
      fields: {
        picture: true,
        name: true,
        email: true,
        phone: true,
        gender: true,
        dob: true,
        location: true,
        registered: true,
      },
    },
    search: {
      fields: {
        column: "gender",
        query: "",
      },
    },
  };

  public pagination = {
    total: 20,
    per_page: 5,
    current_page: 1,
  };

  @User.Getter
  public fetchedUserData!: RandomUser[];

  @User.Getter
  public fetchedUserInfo!: RandomUserInfo;

  @User.Action
  public initFetchUsers!: (params: RandomUserParams) => Promise<void>;

  @User.Action
  public initExportUsers!: (params: RandomUserParams) => Promise<void>;

  public onExportCSV(): void {
    this.initExportUsers({
      page: this.pagination.current_page,
      results: this.pagination.per_page,
      seed: "abc",
      format: "csv",
      inc: "name,gender,phone,dob,phone,email,location,registered",
    });
  }

  public onPaginateData(page: number): void {
    this.pagination.current_page = page;
  }

  public onPaginatePrevious(): void {
    if (this.pagination.current_page > 1) {
      this.pagination.current_page--;
    }
  }

  public onPaginateNext(): void {
    if (this.pagination.current_page < 5) {
      this.pagination.current_page++;
    }
  }

  mounted(): void {
    this.initFetchUsers({
      page: this.pagination.current_page,
      results: this.pagination.per_page,
      inc: "name,gender,phone,dob,phone,email,location,picture,registered",
      seed: "abc",
    });
  }

  @Watch("forms.columns.fields", {
    immediate: true,
    deep: true,
  })
  columnsChanged(): void {
    let columns = "";
    const columnFields: DynamicFields = this.forms.columns.fields;
    const defaultFields = [
      {
        name: null,
        field: "picture",
        width: "10rem",
      },
      {
        name: "Name",
        field: "name",
      },
      {
        name: "Email",
        field: "email",
      },
      {
        name: "Phone",
        field: "phone",
      },
      {
        name: "Gender",
        field: "gender",
      },
      {
        name: "Age",
        field: "dob",
      },
      {
        name: "Location",
        field: "location",
        width: "35rem",
      },
      {
        name: "Registered",
        field: "registered",
      },
    ];

    for (const item in columnFields) {
      if (columnFields[item]) {
        columns += `${item},`;
      }
    }

    this.fields = defaultFields.filter((item) => {
      return columnFields[item.field] === true;
    });

    this.initFetchUsers({
      page: this.pagination.current_page,
      results: this.pagination.per_page,
      inc: columns.toString(),
      seed: "abc",
    });
  }

  @Watch("forms.search.fields.query", {
    immediate: true,
    deep: true,
  })
  searchQueryChanged(): void {
    if (this.forms.search.fields.query.length >= 4) {
      if (this.forms.search.fields.column === "gender") {
        this.initFetchUsers({
          gender: this.forms.search.fields.query,
          page: this.pagination.current_page,
          results: this.pagination.per_page,
          inc: "name,gender,phone,dob,phone,email,location,picture,registered",
        });
      }
    }
  }

  @Watch("pagination.current_page", {
    immediate: true,
    deep: true,
  })
  currentPageChanged(): void {
    this.initFetchUsers({
      gender: this.forms.search.fields.query,
      page: this.pagination.current_page,
      results: this.pagination.per_page,
      inc: "name,gender,phone,dob,phone,email,location,picture,registered",
    });
  }
}
</script>
