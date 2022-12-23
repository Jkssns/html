<template>
	<div>
		<div style="color: red;">显示红色</div>

		<div :style="{color: red}">报错，因为red应该是个字符串，这里是引用的data中的变量，而data中没有叫red的变量。</div>

		<div :style="{color: 'red'}">显示红色</div>

		<div :style="{color: isRight ? 'red' : ''}">显示红色</div>

		<div :style="{color: isRight === true ? '' : 'blue'}">显示蓝色</div>

		<div :style="{color: isRight === false ? '' : ''}">没有设置颜色，显示默认的黑色。</div>

		<div :style="{color: isRight ? '' : ''}">没有设置颜色，显示默认的黑色。</div>

		<div :style="isRight ? {color: 'red'} : {color: 'blue'}">显示红色</div>

		<div :style="isRight === true ? {} : {color: 'blue'}">显示蓝色</div>

		<div :style="[isRight === true ? 'red' : 'blue' ]">显示蓝色</div>

		<div :style="[isRight === true ? {color: 'red'} : {color: 'blue'}]">显示蓝色</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isRight: false, // 一个布尔值
				
			}
		},
	}
</script>