<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import CardProduct from "../components/CardProduct.vue";

export default {
  name: "HomeView",
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchProducts", "fetchCategory"]),
    queryAction(params, val) {
      if (params === "page") {
        this.query.page = val;
      }
      if (params === "filter") {
        this.query = {
          filter: val,
        };
      }
      if (params === "search") {
        this.query = {
          search: val,
        };
      }
      this.fetchProducts();
      this.fetchCategory();
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ['query']),
    ...mapState(useCounterStore, ['products', 'categories', 'allPage'])
  },
  created() {
    this.fetchProducts()
    this.fetchCategory()
  },
  components: { CardProduct },
};
</script>

<template>
    <!-- <pre>{{ categories }}</pre> -->
    <h1>afsfasd</h1>
    <!-- <pre>{{ products }}</pre> -->
  <div class="d-flex">
    <div class="flex-shrink-0 sticky-top">
      <div class="sticky-top">
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white my-4 mx-4"
        >
          <div class="sticky-top">
            <div class="mx-3 mt-4">
              <div class="d-flex justify-content-center align-items-center">
                <h5>
                  <i class="fas fa-sort-alpha-down-alt"></i> Filter
                  <i class="fas fa-grip-lines-vertical"></i>  <i class="fas fa-search"></i>  Search
                </h5>
              </div>
              <div class="list-group list-group-flush mx-3 mt-4">
                <a
                  class="list-group-item list-group-item-action py-2 Sripple bg-white"
                  aria-current="true"
                  data-mdb-toggle="collapse"
                  href="#collapseExample1"
                  aria-expanded="true"
                  aria-controls="collapseExample1"
                >
                  <i class="fas fa-tshirt"></i><span> Categories</span>
                </a>
                <ul
                  id="collapseExample1"
                  class="collapse show list-group list-group-flush"
                >
                  <li
                    v-for="item in categories"
                    :key="item.id"
                    class="list-group-item py-1"
                  >
                    <a
                      class="text-reset"
                      href="#"
                      @click.prevent="queryAction('filter', item.id)"
                      ><i
                        class="fas fa-award"
                        v-if="item.name === `Cat`"
                      ></i
                      ><i
                        class="fas fa-gamepad"
                        v-if="item.name === `Dog`"
                      ></i>
                      {{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="input-group my-6 py-3">
                <div class="form-outline flex-fill">
                  <input
                    type="search"
                    id="form1"
                    class="form-control form-control-lg"
                    v-model="searchData"
                  />
                  <label class="form-label" for="form1">Enter keywords?</label>
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  @click.prevent="queryAction('search', searchData)"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="flex-grow-1 ms-3">
        <div class="d-flex justify-content-center align-items-center my-3">
          <div class="row m-auto px-5">
            <CardProduct
              v-for="item in products"
              :key="item.id"
              :item="item"
              :page="'home'"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item" v-for="item in +allPage">
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="queryAction('page', item)"
                  >{{ item }}</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>
