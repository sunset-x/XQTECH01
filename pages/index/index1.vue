<template>

	<view>
		
	      <view class="status_bar" :style="{height:statusBarHeight+'px'}">>
	          <!-- 这里是状态栏 -->
		  </view>
				
			<view class="navBar" :style="{height:titleBarHeight+'px'}">
					<text>
						aaa
					</text>
			</view>

	<!-- 		  <view>新启科技 x 安春堂</view>
			  <view>家家送药</view> -->

		  

		  <h1>Hello XQTech</h1>
	  </view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				statusBarHeight:0,
				titleBarHeight: 0,
			}
		},
		created() {
			//获取胶囊按钮的数据
			this.tophight = uni.getMenuButtonBoundingClientRect()
		},
		onLoad() {

		},
		mounted() {
					let systemInfo = uni.getSystemInfoSync()
					this.statusBarHeight = systemInfo.statusBarHeight
					let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
					this.titleBarHeight = (menuButtonInfo.top - this.statusBarHeight) * 2 + menuButtonInfo.height
				},
				
		methods: {

		}
	}
</script>

<style>
	/* .blue-title{
		background-color: #007AFF;
		width: 100%;
		height: 200rpx;
	} */
/* 	.status_bar {
	      height: var(--status-bar-height) +20px;
	      width: 100%;
		 background-color: #007AFF;
	  }
	 */


	/* .bans-title{
		text-align: center;
		margin-left: 222rpx;
		color: #fff;
	}
	.BanContain{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;
	}
	.back-img{
		width: 34px;
		height: 34px;
		margin-left: 18rpx;
	}
	.navBar {
			display: flex;
			align-items: center;
			/* padding-bottom: 10rpx; */
			/* background-color: #21A675; */
/* 		}
	.status_bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #21A675;
			}	  */
	 */
	

</style>
