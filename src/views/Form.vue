<template>
  <div id="form">
    <h3>Form</h3>
    <form v-on:submit.prevent="submit">
      <!-- Firstname -->
      <div>
        <label for="fisrt_name">Fisrtname : </label>
        <input
          type="text"
          name="fisrt_name"
          v-model.trim="applicant.fisrt_name"
        />
      </div>
      <br />
      <!-- Lastname -->
      <div>
        <label for="last_name">Lastname : </label>
        <input
          type="text"
          name="last_name"
          v-model.lazy="applicant.last_name"
        />
      </div>
      <br />
      <!-- Sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
      </div>
      <div>
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>
      <br />
      <!-- Age -->
      <div>
        <label for="age">Age : </label>
        <input type="number" name="age" v-model.number="applicant.age" />
      </div>
      <br />
      <!-- Courses -->
      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="react">Angular</option>
          <option value="react">Vue</option>
        </select>
      </div>
      <br />
      <button
        class="btn btn-vue"
        type="button"
        @click.exact="clear"
        @click.alt="useDefault"
      >
        clear
      </button>
      <button class="btn btn-vue" type="submit">Submit</button>
    </form>
    <div style="margin-top: 15px">#spy {{ JSON.stringify(applicant) }}</div>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      applicant: {
        fisrt_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "vuejs"
      }
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        fisrt_name: "",
        last_name: "",
        sex: "",
        age: 0,
        course: ""
      };
    },
    useDefault() {
      this.applicant = {
        fisrt_name: "UNKNOW",
        last_name: "UNKNOW",
        sex: "male",
        age: "0",
        course: "vuejs"
      };
    }
  }
};
</script>

<style></style>
