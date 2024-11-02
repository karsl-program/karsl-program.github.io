import React, { useState, useEffect } from 'react';
import { Code2, Github, Mail, Terminal, Twitter, ExternalLink, Tv, BadgeCheck } from 'lucide-react';

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0, prev = "";
    const timer = setInterval(() => {
      if (index < text.length) {
        const timer2 = setInterval(() => {
          if (index < text.length) {
            for (let i = 0; i < Math.random()*10+5; i++) {
              setDisplayText(
                prev + String.fromCharCode(97+Math.floor(Math.random()*10))
              );
            }
          } else {
            clearInterval(timer2);
          }
        }, 100);
        prev += text.charAt(index);
        setDisplayText(prev);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [text]);
  
  return <span className="font-mono">{displayText}</span>;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center space-x-3">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <h1 className="text-2xl font-mono font-bold">karsl-program</h1>
          </div>
          <div className="h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />
        </header>

        {/* Hero Section */}
        <section className="space-y-6 pt-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 mb-5">
              <Terminal className="w-5 h-5" />
              <TypewriterText text="break, don't return." />
            </div>
            <h2 className="text-4xl font-bold">
              这里是 karsl ！
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            一名很弱的 <strong>OIer & MOer & PhOer</strong>，并且是个热爱 coding 的全栈开发者，位于福建厦门，欢迎来到我的个人主页！
          </p>
        </section>

        {/* Featured Projects */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-emerald-400">我的项目 | Featured Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "CLangIDE",
                description: "一个简洁、美观的原生C/C++集成开发环境（IDE）",
                tech: ["C/C++", "IDE", "PyQt", "GPL v3"],
                link: "https://github.com/karsl-program/CLangIDE"
              },
              {
                title: "MetaICP-CE",
                description: "快速构建自己的虚拟备案网站！",
                tech: ["HTML", "Golang/Gin API", "ICP", "MIT"],
                link: "https://github.com/karsl-program/MetaICP-CE"
              },
              {
                title: "Luogu-Command (lgc)",
                description: "用强大的命令行帮助OIers更快捷、更高效、更专注地在洛谷刷题",
                tech: ["Python", "OI", "Luogu/Command", "GPL v3"],
                link: "https://github.com/karsl-program/lgc-Luogu-Command"
              },
              {
                title: "QuanGuo_man",
                description: "C++ 原创控制台小游戏，由于年代久远，所以不可避免地出现祖传代码。",
                tech: ["C++", "Shell", "Game"],
                link: "https://github.com/karsl-program/QuanGuo_man"
              },
              {
                title: "MyWM",
                description: "受《三体》剧情启发创作的创造性小游戏，玩家将创建多个文明，并通过随机事件让这些文明一决高下。",
                tech: ["C++", "Game", "Threebody"],
                link: "https://github.com/karsl-program/MyWM"
              },
              {
                title: "PyNews",
                description: "通过Python爬虫实时获取今日头条的新闻。（远古时期入门 Python 爬虫时的小开发）",
                tech: ["Python", "Web API", "News"],
                link: "https://github.com/karsl-program/PyNews"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-all cursor-pointer" onClick={() => window.open(project.link)}>
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <ExternalLink className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-gray-700 rounded-full text-emerald-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-emerald-400">技术栈 | Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML/CSS",
              "PHP",
              "JavaScript",
              "TypeScript",
              "React/Next.js",
              "Node.js",
              "Python",
              "C/C++",
              "Rust",
              "Swift",
              "Ruby",
              "Bash/Linux",
              "SQL",
              "Docker",
              "Golang",
              "Java"
            ].map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded px-4 py-2 text-center hover:bg-white hover:text-black cursor-pointer light transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <footer className="pt-12 space-y-8">
          <div className="h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <div className="flex space-x-6">
              <a href="https://github.com/karsl-program" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://space.bilibili.com/3493116740896932" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Tv className="w-6 h-6" />
              </a>
              <a href="https://www.luogu.com.cn/user/1033564" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <BadgeCheck className="w-6 h-6" />
              </a>
              <a href="https://x.com/ProgramZoubg" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:official_zoujiale@163.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;