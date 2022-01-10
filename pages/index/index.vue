<template>
	<view>
	      <view class="status_bar">
	          <!-- 这里是状态栏 -->
	      </view>
		  <!-- 自定义导航栏 -->
		  <view class="xui-titleNav">
			  <view class="company_name">
				  <view class="t-icon t-icon-gaishuai"></view>
				  <text>新启科技</text> 
				  <text class="lianming">x</text> 
				  <view class="t-icon t-icon-guanzhu"></view>
				  <text>安春堂</text>
			  </view>
			  <view class="app_name">
				    <!-- 家家送药 -->
					<image src="../../static/images/logo1.png" mode="heightFix" ></image>
			  </view>
			  <view class="address_location">
				  <view class="store_name">
						<text>安春堂大药房万达店</text>
						<view class="t-icon t-icon-fangchanxinxi"></view>
				  </view>
				  <view class="address_name">
						<view class="t-icon t-icon-dingwei1"></view>
						<text>万达公馆A座</text>
				  </view>
			  </view>
		  </view>
		  <!-- 自定义导航栏 END -->
		  
		  <!-- 搜索框 -->
		  <view class="xui-searchbar">
			  <view class = "search" @click="search">
				  <view class="t-icon t-icon-sousuo searchIcon"></view>
				  <text class = 'searchInfo'>搜索药品、病名、症状</text>
				  <text class = 'searchQR' @click="searchQR">
					  <view class="t-icon t-icon-paizhao"></view>
				  </text>
			  </view>
			  
			  <view class="xui-classify" @click="classify">
				  <view class="t-icon t-icon-guanlian"></view>
				  <text>分类</text>
			  </view>
		  </view>
		  <!-- 搜索框 END -->
		  
		  <!-- banner -->
		  
		  <view class="xui-banner-bg">
		  	<view class="xui-primary-bg xui-route-left"></view>
		  	<view class="xui-primary-bg xui-route-right"></view>
		  	<!--banner-->
		  	<view class="xui-banner-box">
		  		<swiper
		  			:indicator-dots="true"
		  			:autoplay="true"
		  			:interval="5000"
		  			:duration="150"
		  			class="xui-banner-swiper"
		  			:circular="true"
		  			indicator-color="rgba(255, 255, 255, 0.8)"
		  			indicator-active-color="#fff"
		  		>
		  			<swiper-item v-for="(item, index) in banner" :key="index" @tap.stop="detail">
		  				<image :src="'/static/images/banner/' + item" class="xui-slide-image" mode="scaleToFill" />
		  			</swiper-item>
		  		</swiper>
		  	</view>
		  </view>
		  <!-- banner END-->
		  
		  
		  
		  <view class="tui-product-category">
		  	<view class="tui-category-item" v-for="(item, index) in category" :key="index" :data-key="item.name" @click="more">
		  		<image :src="'/static/images/category/' + item.img" class="tui-category-img" mode="scaleToFill"></image>
		  		<view class="tui-category-name">{{ item.name }}</view>
		  	</view>
		  </view>
		  
		  <view class="xui-promotion-box">
			  <image src="../../static/images/banner/promotion0.jpg" mode="scaleToFill"></image>
			  
		  </view>
		  
		  <!-- 秒杀楼层 -->
		  <view class="seckill-section m-t">
		  	<view class="s-header">
		  		<image class="s-img" src="/static/images/index/secskill-img.jpg" mode="widthFix"></image>
		  		<text class="tip">距结束</text>
		  		<text class="hour timer">01</text>
		  		<text class="minute timer">13</text>
		  		<text class="second timer">55</text>
		  		<text class="yticon icon-you"></text>
		  	</view>
		  	<scroll-view class="floor-list" scroll-x>
		  		<view class="scoll-wrapper">
		  			<view 
		  				v-for="(item, index) in goodsList" :key="index"
		  				class="floor-item"
		  				@click="navToDetailPage(item)"
		  			>
		  				<image :src="item.image" mode="aspectFill"></image>
		  				<text class="title clamp">{{item.title}}</text>
		  				<text class="price">￥{{item.price}}</text>
		  			</view>
		  		</view>
		  	</scroll-view>
		  </view>
		  
		  <view class="xui-product-box">
			  
		  </view>
		  
		  <view class="xui-product-container">
			  
		  </view>
		  
	      <view> END </view>
	  </view>
</template>

<!-- <script src="../../static/fonts/iconfont.js"></script>
 -->
<script>
	export default {
		data() {
			return {
				banner:['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
				category: [],
				goodsList: []
				
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				// let carouselList = await this.$api.json('carouselList');
				// this.titleNViewBackground = carouselList[0].background;
				// this.swiperLength = carouselList.length;
				// this.carouselList = carouselList;
				
				this.category = await this.$api.json('categoryList');
				console.log(this.category)
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			
			
			classify: function() {
				console.log('classif')
				uni.navigateTo({
					url: '/pages/search/search',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					}
				});
			},
			
			more: function(e) {
				console.log('hi-more')
				// let key = e.currentTarget.dataset.key || '';
				// uni.navigateTo({
				// 	// url: 'pages/mine/mine?searchKey=' + key
				// 	url: 'pages/mine/mine'
				// });
				
				// uni.navigateTo({
				// 	url: '../mine/mine',
				// 	success: function(res) {
				// 	    // 通过eventChannel向被打开页面传送数据
				// 	    // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
				// 		console.log('ee')
				// 	  }
				// });
				
				console.debug()
				uni.redirectTo({
				    url: '/pages/search/search'
				});
			},
			
		}
	}
</script>

<style lang="scss">

.status_bar {
      height: var(--status-bar-height);
      width: 100%;
	  background-color: $xq-primary-color;
	  color:white;
	  
  }
// ====
.xui-titleNav{
	background-color: $xq-primary-color;
	color:white;
	padding: 6rpx 30rpx 30rpx 25rpx;
	.company_name{
		font-size: 22rpx;
		
		.t-icon{
			width: 22rpx;
			height: 22rpx;
			
		}
		.lianming{
			font-size: 15rpx;
			padding: 10rpx;
			vertical-align: 4rpx;
			opacity: 0.7;
		}
	}
	.app_name{
		font-size:55rpx;
		font-family: SERIF;
		padding: 10rpx 0;
		image{
			max-height: 60rpx;
		}
		// max-height: 30px;
	}
	.address_location{
		display: flex;
		font-size: 30rpx;
		justify-content: space-between;
		align-content: center;
		.store_name{
			padding-right: 10rpx;
		}
		.address_name{
			text{
				text-decoration: underline;
				padding-bottom: 5rpx;
				padding-left: 10rpx;
			}
		}
		.t-icon{
			vertical-align: -6rpx;
			
		}
	}
}

// ====

	
	.xui-searchbar{
		height: 80rpx;
		padding: 0 25rpx;
		background-color: $xq-primary-color;
		display: flex;
		justify-content: space-between;
		
		.search{
			width: 90%;
			height: 60rpx;
			border: 1px border white;
			border-radius: 8rpx;
			background-color: white;
			font-size: 26rpx;
			padding: 6rpx 8rpx;
			display: flex;
			align-items: center;
			.searchIcon{
				align-content: center;	
				margin-left: 12rpx;
				margin-right: 10rpx;
				background-repeat: no-repeat;
			}
			.searchInfo{
				flex-grow: 1;
				color: #bdc2c6;
			}
			.searchQR{
				padding-right:12rpx;
			}
		}
		
		.xui-classify{
			font-size: 24rpx;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			view{
				
			}
			text{
				transform: scale(0.8);
				line-height: 26rpx;
			}
			
		}
	}


// ====
.xui-banner-bg {
	display: flex;
	height: 180rpx;
	background-color: $xq-primary-color;
	position: relative;
	margin-bottom: 100rpx;
}

.xui-primary-bg {
	width: 50%;
	display: inline-block;
	height: 224rpx;
	border: 1px solid transparent;
	position: relative;
	z-index: 1;
	background-color: $xq-primary-color;
}

.xui-route-left {
	transform: skewY(4deg);
}

.xui-route-right {
	transform: skewY(-4deg);
}

.xui-banner-box {
	width: 100%;
	padding: 0 20rpx;
	box-sizing: border-box;
	position: absolute;
	/* overflow: hidden; */
	z-index: 99;
	bottom: -80rpx;
	left: 0;
}

.xui-banner-swiper {
	width: 100%;
	height: 240rpx;
	border-radius: 12rpx;
	overflow: hidden;
	transform: translateY(0);
}

.xui-slide-image {
	width: 100%;
	height: 240rpx;
	display: block;
}


// category
.tui-product-category {
	background-color: #fff;
	padding: 80rpx 20rpx 30rpx 20rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	font-size: 24rpx;
	color: #555;
	margin-bottom: 20rpx;
}

.tui-category-item {
	width: 20%;
	height: 118rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding-top: 30rpx;
}

.tui-category-img {
	height: 80rpx;
	width: 80rpx;
	display: block;
}

.tui-category-name {
	line-height: 24rpx;
}

//
.xui-promotion-box{
	display: block;
	margin: 0 20px;
	background-color: blue;
	display: block;
	
	image{
		width: 100%;
		max-height: 70px;
		text-align: center;
		border: 1px solid red;
	}
}

/* 秒杀专区 */
.seckill-section{
	padding: 4upx 40upx 24upx;
	background: #fff;
	.s-header{
		display:flex;
		align-items:center;
		height: 92upx;
		line-height: 1;
		.s-img{
			width: 140upx;
			height: 30upx;
		}
		.tip{
			font-size: $font-base;
			color: $font-color-light;
			margin: 0 20upx 0 40upx;
		}
		.timer{
			display:inline-block;
			width: 40upx;
			height: 36upx;
			text-align:center;
			line-height: 36upx;
			margin-right: 14upx;
			font-size: $font-sm+2upx;
			color: #fff;
			border-radius: 2px;
			background: rgba(0,0,0,.8);
		}
		.icon-you{
			font-size: $font-lg;
			color: $font-color-light;
			flex: 1;
			text-align: right;
		}
	}
	.floor-list{
		white-space: nowrap;
	}
	.scoll-wrapper{
		display:flex;
		align-items: flex-start;
	}
	.floor-item{
		width: 150upx;
		margin-right: 20upx;
		font-size: $font-sm+2upx;
		color: $font-color-dark;
		line-height: 1.8;
		image{
			width: 100upx;
			height: 100upx;
			border-radius: 6upx;
		}
		.price{
			color: $uni-color-primary;
		}
	}
}
// 
// .f-header{
// 	display:flex;
// 	align-items:center;
// 	height: 140upx;
// 	padding: 6upx 30upx 8upx;
// 	background: #fff;
// 	image{
// 		flex-shrink: 0;
// 		width: 80upx;
// 		height: 80upx;
// 		margin-right: 20upx;
// 	}
// 	.tit-box{
// 		flex: 1;
// 		display: flex;
// 		flex-direction: column;
// 	}
// 	.tit{
// 		font-size: $font-lg +2upx;
// 		color: #font-color-dark;
// 		line-height: 1.3;
// 	}
// 	.tit2{
// 		font-size: $font-sm;
// 		color: $font-color-light;
// 	}
// 	.icon-you{
// 		font-size: $font-lg +2upx;
// 		color: $font-color-light;
// 	}
// }


</style>
