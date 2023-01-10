<script>
export default {};
</script>

<template>
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 my-2 text-center">
          <h3 class="fontstyle">Please write your order data</h3>
        </div>
      </div>
    </div>

    <div
      class="container-fluid d-flex justify-content-center card card1 col-md-8 text-center"
      style="border-radius: 1rem"
    >
      <form>
        <div class="d-flex flex-column mx-auto mt-3">
          <div class="row g-2 align-items-start ms-5">
            <div class="col-auto ms-3 text-end">
              <label for="brand" class="col-form-label">Brand:</label><br />
              <label for="size" class="col-form-label">Size:</label><br />
              <label for="color" class="col-form-label">Color:</label><br />
              <label for="material" class="col-form-label">Material:</label
              ><br />
              <label for="photo" class="col-form-label">Photo:</label
              ><br /><br /><br />
              <label for="service" class="col-form-label">Service:</label><br />
              <label for="address" class="col-form-label">Address:</label><br />
            </div>

            <div class="col-8 pt-1 ms-3 mb-3">
              <input type="text" class="form-control form-control-sm mb-2" />
              <input type="text" class="form-control form-control-sm mb-2" />
              <input type="text" class="form-control form-control-sm mb-2" />
              <select class="form-select form-select-sm mb-2">
                <option selected>--- Select One ---</option>
                <option value="canvas">Canvas</option>
                <option value="denim">Denim</option>
                <option value="knit">Knit</option>
                <option value="leatherSuede">Leather Suede</option>
                <option value="nubuckLeather">Nubuck Leather</option>
                <option value="syntheticLeather">Synthetic Leather</option>
                <option value="rubber">Rubber</option>
              </select>
              <textarea
                class="form-control form-control-sm mb-2"
                rows="3"
              ></textarea>
              <select class="form-select form-select-sm mb-2">
                <option selected>--- Select One ---</option>
                <option value="standard">Standard Cleaning</option>
                <option value="premium">Premium Cleaning</option>
                <option value="suede">Premium Suede</option>
                <option value="leather">Leather Shining</option>
                <option value="repaint">Repaint</option>
              </select>
              <textarea
                class="form-control form-control-sm mb-2"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-outline-primary btn-block mb-3 col-2 me-3 border text-white"
        >
          Order
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-block mb-3 col-2 border text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>
