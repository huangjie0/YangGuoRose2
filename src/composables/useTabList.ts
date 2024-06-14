
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate, useRouter } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";

export function useTabList() {
  const route = useRoute();
  const router = useRouter();
  const activeTab = ref(route.path);
  const cookie = useCookies();

  const tabList = ref<any[]>([
    {
      title: "后台首页",
      path: "/",
    },
  ]);

  const addTab = (tabs: any) => {
    let noTab = tabList.value.findIndex((t) => t.path == tabs.path) == -1;
    if (noTab) tabList.value.push(tabs);
    cookie.set("tabList", tabList.value);
  };

  onBeforeRouteUpdate((to: any) => {
    activeTab.value = to.path;
    addTab({
      title: to.meta.title,
      path: to.path,
    });
  });

  //点击tabs事件
  const handleChange = (path: string) => {
    activeTab.value = path;
    router.push(path);
  };

  //移除tabs逻辑
  const tabRemove = (path: string) => {
    let tabs = tabList.value;
    let a = activeTab.value;
    if (a == path) {
      tabs.forEach((tab, index) => {
        if (tab.path == path) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            a = nextTab.path;
          }
        }
      });
    }

    activeTab.value = a;
    router.push(activeTab.value);
    tabList.value = tabList.value.filter((tab) => tab.path !== path);
    cookie.set("tabList", tabList.value);
  };

  //初始化标签导航
  const initTabList = () => {
    let tabs = cookie.get("tabList");
    if (tabs) {
      tabList.value = tabs;
    }
  };

  initTabList();

  const handleCommand = (value: string) => {
    switch (value) {
      case "clearOther":
        tabList.value = tabList.value.filter(
          (f) => f.path == "/" || f.path == activeTab.value
        );
        break;

      case "clearAll":
        //切换到首页
        activeTab.value = "/";
        //过滤剩下首页
        tabList.value = tabList.value.filter((f) => f.path == "/");
        //跳转到首页
        router.push("/");
        break;
    }
    cookie.set("tabList", tabList.value);
  };
  return {
    activeTab,
    tabList,
    handleChange,
    handleCommand,
    tabRemove
  }
}
