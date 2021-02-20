<template>
  <div id="loop">
    <h3>Loop</h3>
    <ul>
      <li v-for="(item, index) in ['Angular', 'vue', 'react']" :key="index">
        {{ item }}
      </li>
    </ul>

    <hr />

    <ul>
      <li v-for="(item, index) in MyCourses" :key="index">
        {{ item.title }} = {{ item.price }}
      </li>
    </ul>
    <!-- Destructuring -->
    <ul>
      <li v-for="({ title, price }, index) in MyCourses" :key="index">
        {{ title }} = {{ price }}
      </li>
    </ul>

    <input type="text" placeholder="Title" v-model="course.title" />
    <br />
    <input type="text" placeholder="Price" v-model="course.Price" />
    <br />
    <br />
    <button class="btn btn-vue" @click="addCourse">Submit</button>
    <!-- Dynamic -->
    <ul>
      <li v-for="(course, index) in dynamicCourses" :key="index">
        {{ course.title }} = {{ course.price }}
        <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Loop",
  methods: {
    addCourse() {
      this.dynamicCourses.push(this.course);
      this.course = { title: "", price: 0 };
    },
    removeCourse(index) {
      this.dynamicCourses.shift(index, 1);
    }
  },
  data() {
    return {
      course: { title: "", price: 0 },
      dynamicCourses: [],
      MyCourses: [
        { title: "IOS", price: 1000 },
        { title: "Android", price: 2000 },
        { title: "Flutter", price: 3000 }
      ]
    };
  }
};
</script>

<style></style>
