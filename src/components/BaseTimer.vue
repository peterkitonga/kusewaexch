<template>
  <ul class="timer">
    <li class="timer__item">
      <span ref="timer-days" class="timer__item-text separated">00</span>
      <small class="timer__item-small-text">Days</small>
    </li>
    <li class="timer__item">
      <span ref="timer-hours" class="timer__item-text separated">00</span>
      <small class="timer__item-small-text">Hours</small>
    </li>
    <li class="timer__item">
      <span ref="timer-mins" class="timer__item-text separated">00</span>
      <small class="timer__item-small-text">Mins</small>
    </li>
    <li class="timer__item">
      <span ref="timer-secs" class="timer__item-text">00</span>
      <small class="timer__item-small-text">Secs</small>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseTimer extends Vue {
  @Prop({ required: true, type: String }) date!: string;

  public timerInterval!: number;

  get endTime(): number {
    const endDate = new Date(this.date);

    return endDate.getTime();
  }

  public onCountDown(): void {
    this.timerInterval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.endTime - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = this.$refs["timer-days"] as HTMLElement;
      const hoursEl = this.$refs["timer-hours"] as HTMLElement;
      const minsEl = this.$refs["timer-mins"] as HTMLElement;
      const secsEl = this.$refs["timer-secs"] as HTMLElement;

      if (distance > 0) {
        daysEl.innerText = `${
          days.toString().length < 2 ? "0" : ""
        }${days.toString()}`;
        hoursEl.innerText = `${
          hours.toString().length < 2 ? "0" : ""
        }${hours.toString()}`;
        minsEl.innerText = `${
          minutes.toString().length < 2 ? "0" : ""
        }${minutes.toString()}`;
        secsEl.innerText = `${
          seconds.toString().length < 2 ? "0" : ""
        }${seconds.toString()}`;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  mounted(): void {
    this.onCountDown();
  }

  beforeDestroy(): void {
    clearInterval(this.timerInterval);
  }
}
</script>
