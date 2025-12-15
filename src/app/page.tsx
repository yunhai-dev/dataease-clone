'use client';

import { useState } from 'react';
import { X, Star, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">重要信息</h2>
            <div className="text-gray-600 leading-relaxed mb-6">
              <p className="mb-3">
                DataEase 正在参加 Gitee 2025 最受欢迎的开源软件投票活动，快来给我们投票吧！如果 DataEase 帮到了你，希望你可以来支持一下，这对我们非常重要。感谢！♥️♥️♥️
              </p>
              <a
                href="https://gitee.com/activity/2025opensource?ident=IUXHKP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://gitee.com/activity/2025opensource?ident=IUXHKP
              </a>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
            >
              确定
            </button>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#1a2332] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://ext.same-assets.com/3370481442/2954861715.svg" alt="FIT2CLOUD" className="h-5" />
            <span className="text-gray-300">飞致云旗下开源产品</span>
          </div>
          <button className="flex items-center gap-1 text-gray-300 hover:text-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#34485f] text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img src="https://ext.same-assets.com/3370481442/2752714044.svg" alt="DataEase" className="h-8" />
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-blue-300">产品优势</a>
                <a href="#" className="hover:text-blue-300">模板市场</a>
                <a href="#" className="hover:text-blue-300">免费下载</a>
                <a href="#" className="hover:text-blue-300">帮助支持</a>
                <a href="#" className="hover:text-blue-300">购买</a>
                <a href="#" className="hover:text-blue-300">智能问数</a>
                <a href="#" className="hover:text-blue-300">联系我们</a>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">22,705</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2c4a6f] via-[#3a6d8c] to-[#4fb3a6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">人人可用的开源 BI 工具</h1>
          <p className="text-xl text-white/90 mb-8">
            数据驱动决策，从 DataEase 开始。简单易用、功能强大的数据可视化分析工具。
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            什么是 <span className="text-blue-600">DataEase</span> ?
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-600 font-semibold">DataEase</span> 是开源的数据可视化分析工具，帮助用户快速分析数据并洞察业务趋势，从而实现业务的改进与优化。
            DataEase 支持丰富的数据源连接，能够通过拖拉拽方式快速制作图表，并可以方便地与他人分享。
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://ext.same-assets.com/3370481442/509734704.png"
              alt="DataEase Demo"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">DataEase</span> 的优势
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            坚持倾听社区声音，始终坚持高质量快速迭代，用心做好一款 <span className="font-semibold">人人可用</span> 的开源 BI 工具。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="https://ext.same-assets.com/3370481442/275573383.svg" alt="开源开放" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">开源开放</h3>
              <p className="text-gray-600 text-sm">
                零门槛，线上快速获取和安装，按月迭代
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="https://ext.same-assets.com/3370481442/3466316739.svg" alt="简单易用" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">简单易用</h3>
              <p className="text-gray-600 text-sm">
                极易上手，通过鼠标点击和拖拽即可完成分析
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="https://ext.same-assets.com/3370481442/4259435800.svg" alt="全场景支持" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">全场景支持</h3>
              <p className="text-gray-600 text-sm">
                多平台安装和多样化嵌入支持
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="https://ext.same-assets.com/3370481442/1415836515.svg" alt="安全分享" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">安全分享</h3>
              <p className="text-gray-600 text-sm">
                支持多种数据分享方式，确保数据安全
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">丰富的数据源支持</h2>
          <p className="text-center text-gray-600 mb-12">
            <span className="text-blue-600 font-semibold">DataEase</span> 支持 OLTP、OLAP、数据仓库、数据湖、数据文件 和 API 接口等各种数据源。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: 'https://ext.same-assets.com/3370481442/2641759434.jpeg', alt: 'Excel' },
              { src: 'https://ext.same-assets.com/3370481442/52255412.png', alt: 'MySQL' },
              { src: 'https://ext.same-assets.com/3370481442/197112205.jpeg', alt: 'Oracle' },
              { src: 'https://ext.same-assets.com/3370481442/3504909487.jpeg', alt: 'SQL Server' },
              { src: 'https://ext.same-assets.com/3370481442/1368092582.jpeg', alt: 'PostgreSQL' },
              { src: 'https://ext.same-assets.com/3370481442/1462033085.jpeg', alt: 'MariaDB' },
              { src: 'https://ext.same-assets.com/3370481442/3050590425.jpeg', alt: 'Elasticsearch' },
              { src: 'https://ext.same-assets.com/3370481442/3076242515.jpeg', alt: 'ClickHouse' },
              { src: 'https://ext.same-assets.com/3370481442/3129659572.jpeg', alt: 'Doris' },
              { src: 'https://ext.same-assets.com/3370481442/2961080092.jpeg', alt: 'MongoDB' },
              { src: 'https://ext.same-assets.com/3370481442/2062217293.jpeg', alt: 'Amazon Redshift' },
              { src: 'https://ext.same-assets.com/3370481442/3805149245.png', alt: 'Hive' },
              { src: 'https://ext.same-assets.com/3370481442/1612391142.jpeg', alt: 'IBM DB2' },
              { src: 'https://ext.same-assets.com/3370481442/3957554567.jpeg', alt: 'Cloudera Impala' },
              { src: 'https://ext.same-assets.com/3370481442/3454102025.jpeg', alt: 'TiDB' },
              { src: 'https://ext.same-assets.com/3370481442/642623824.jpeg', alt: 'StarRocks' },
              { src: 'https://ext.same-assets.com/3370481442/3784288937.jpeg', alt: 'SAP' },
              { src: 'https://ext.same-assets.com/3370481442/4074587939.jpeg', alt: '达梦数据库' },
              { src: 'https://ext.same-assets.com/3370481442/2906082763.jpeg', alt: 'KingBase' },
              { src: 'https://ext.same-assets.com/3370481442/1653825717.jpeg', alt: '飞书' },
            ].map((db, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center justify-center">
                <img src={db.src} alt={db.alt} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">丰富的业务场景模板</h2>
          <p className="text-center text-gray-600 mb-12">
            <span className="text-blue-600 font-semibold">200+</span> 高质量大屏模板，覆盖制造、零售电商、银行金融、医药健康、交通物流等各行各业。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { src: 'https://ext.same-assets.com/3370481442/1876755263.png', title: '证券公司年度财务年报' },
              { src: 'https://ext.same-assets.com/3370481442/1619433202.png', title: '门店销售驾驶舱' },
              { src: 'https://ext.same-assets.com/3370481442/1582417457.png', title: '车间生产管理大屏' },
              { src: 'https://ext.same-assets.com/3370481442/1545934438.png', title: '电商公司年度销售大屏' },
              { src: 'https://ext.same-assets.com/3370481442/2028426736.png', title: '航空运输情况大屏' },
              { src: 'https://ext.same-assets.com/3370481442/1303155181.png', title: '双碳及能源消耗概览' },
              { src: 'https://ext.same-assets.com/3370481442/2412370597.png', title: '电商消费大数据' },
              { src: 'https://ext.same-assets.com/3370481442/2182933134.png', title: '旅游大数据' },
              { src: 'https://ext.same-assets.com/3370481442/4274583021.png', title: '科技金融渠道分析' },
              { src: 'https://ext.same-assets.com/3370481442/3647467150.png', title: '高中全年级学生情况概览' },
              { src: 'https://ext.same-assets.com/3370481442/854549665.png', title: '测试质量大屏' },
              { src: 'https://ext.same-assets.com/3370481442/3659089968.png', title: '运维安全审计大屏-JS_V3' },
            ].map((template, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-3">
                  <img src={template.src} alt={template.title} className="w-full h-48 object-cover" />
                </div>
                <p className="text-sm text-gray-700 text-center">{template.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-2 rounded hover:bg-blue-50 transition-colors">
              查看更多
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            我在使用其他工具，如何快速上手 <span className="text-blue-600">DataEase</span> ?
          </h2>
          <div className="space-y-6">
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-semibold text-lg flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-blue-600" />
                我在基于 ECharts/AntV 等工具来 DIY 制作各种图表和大屏
              </summary>
              <div className="mt-4 text-gray-600 pl-7">
                <p className="mb-3">
                  DataEase 也是基于 ECharts/AntV 来生成图表，但 DataEase 的优势是不写代码就可以制作出个性化的图表和大屏。
                </p>
                <p>
                  此外，<a href="#" className="text-blue-600 hover:underline">DataEase 嵌入式分析</a> 支持在您的产品或者项目中嵌入 DataEase 的自助式 BI 分析功能，可以打造顺畅的产品使用体验。
                </p>
              </div>
            </details>
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-semibold text-lg flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-blue-600" />
                我在使用「帆软 FineBI」等传统 BI 工具
              </summary>
              <div className="mt-4 text-gray-600 pl-7">
                <p className="mb-3">
                  DataEase 致力于打造人人可用的开源数据可视化分析工具，零门槛、用户可以线上快速获取和安装，是这些商业 BI 工具的开源平替。
                </p>
                <p>
                  DataEase 和传统BI工具的详细对比请查看：<a href="#" className="text-blue-600 hover:underline">DataEase VS 传统 BI 工具</a>。
                </p>
              </div>
            </details>
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-semibold text-lg flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-blue-600" />
                我在使用 Metabase 等国外开源 BI 工具
              </summary>
              <div className="mt-4 text-gray-600 pl-7">
                <p className="mb-3">
                  DataEase 致力于打造符合国人使用习惯的开源数据可视化工具，来用主流的技术栈，广泛听取社区反馈，坚持按月迭代。
                </p>
                <p>
                  DataEase 和 Metabase 的详细对比请查看：<a href="#" className="text-blue-600 hover:underline">DataEase VS Metabase</a>。
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">与客户共成长</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: 'https://ext.same-assets.com/3370481442/1303508905.png', title: 'DataEase 助力丹麦生物实现数据驱动的企业管理' },
              { src: 'https://ext.same-assets.com/3370481442/3051651140.jpeg', title: '小牛电动通过 DataEase 进行业务数据可视化分析' },
              { src: 'https://ext.same-assets.com/3370481442/1541649287.jpeg', title: 'DataEase 助力亚加达智能医学实验室 BI 展示' },
              { src: 'https://ext.same-assets.com/3370481442/4039268616.png', title: 'DataEase 助力无锡布勒业务数据可视化建设' },
              { src: 'https://ext.same-assets.com/3370481442/1439264998.jpeg', title: '北京交通大学基于 DataEase 开展多级数据分析与展示' },
              { src: 'https://ext.same-assets.com/3370481442/3233170147.jpeg', title: '作为一家 BI 厂商，飞致云如何人人人使用 DataEase 的？' },
              { src: 'https://ext.same-assets.com/3370481442/3388906485.jpeg', title: '百果园选择 DataEase 搭档赛博微猪实现企业数据应用一体化' },
              { src: 'https://ext.same-assets.com/3370481442/1360516379.jpeg', title: 'DataEase 助力众陶联应对产业数据可视化挑战' },
              { src: 'https://ext.same-assets.com/3370481442/1166713017.jpeg', title: '圣格林电器助助 DataEase 实现数据整合与智能展示' },
              { src: 'https://ext.same-assets.com/3370481442/2470593474.jpeg', title: 'DataEase 实现物业数据可视化管理系统支持' },
              { src: 'https://ext.same-assets.com/3370481442/112777324.jpeg', title: '硬之诚信助 DataEase 以数据驱动业务精细化管理' },
              { src: 'https://ext.same-assets.com/3370481442/1538017316.png', title: '柯尼卡美能达软件开发（大连）有限公司基于 DataEase 构筑内部数据可视化体系' },
            ].map((story, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="bg-white rounded p-4 mb-4 min-h-[80px] flex items-center justify-center">
                  <img src={story.src} alt="" className="max-h-12 object-contain" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">演示视频</h2>
          <p className="text-white/90 mb-8">
            快速演示如何通过 DataEase 连接关系型数据库，通过拖拽地方式制作图表并与他人分享。
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 flex items-center justify-center min-h-[300px]">
            <button className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border-2 border-white/50">
              <Play className="w-10 h-10 text-white ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">联系我们</h2>
          <p className="text-center text-gray-600 mb-12">
            想要进一步了解 <span className="text-blue-600 font-semibold">DataEase</span> ? 欢迎通过如下方式联系我们。
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">微信公众号</h3>
              <img src="https://ext.same-assets.com/3370481442/3154957196.jpeg" alt="微信公众号" className="w-48 h-48 mx-auto" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">技术交流群</h3>
              <img src="https://ext.same-assets.com/3370481442/3154957196.jpeg" alt="技术交流群" className="w-48 h-48 mx-auto" />
            </div>
          </div>
          <div className="mt-12 text-center space-y-3">
            <p className="text-gray-700">
              <span className="inline-block w-6 h-6 mr-2">📞</span>
              400-052-0755
            </p>
            <p className="text-gray-700">
              <span className="inline-block w-6 h-6 mr-2">✉️</span>
              support@fit2cloud.com
            </p>
            <p>
              <a href="#" className="text-blue-600 hover:underline">
                <span className="inline-block w-6 h-6 mr-2">📝</span>
                提交技术咨询
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-600 hover:underline">
                <span className="inline-block w-6 h-6 mr-2">📥</span>
                产品 PPT 材料
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 mb-2">浙ICP备14038283号</p>
          <p className="text-sm text-gray-400 mb-4">
            2014-2025 版权所有©杭州飞致云信息科技有限公司
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">使用条款</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">隐私政策</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">社区软件许可协议</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
