import { computed, ref, shallowRef, watch } from "./vue.runtime.esm-bundler-D72dexdH.js";
import { useMediaQuery } from "./core-CbT0oQbj.js";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/fonts.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/vars.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/base.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/icons.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/utils.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/components/custom-block.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/components/vp-code.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/components/vp-code-group.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/components/vp-doc.css";
import "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/styles/components/vp-sponsor.css";
import VPBadge, { default as VPBadge$1 } from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue";
import Layout from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/Layout.vue";
import VPButton from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue";
import VPDocAsideSponsors from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue";
import VPFeatures from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue";
import VPHomeContent from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPHomeContent.vue";
import VPHomeFeatures from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue";
import VPHomeHero from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue";
import VPHomeSponsors from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue";
import VPImage from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue";
import VPLink from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue";
import VPNavBarSearch from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";
import VPSocialLink from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue";
import VPSocialLinks from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue";
import VPSponsors from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue";
import VPTeamMembers from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue";
import VPTeamPage from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue";
import VPTeamPageSection from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue";
import VPTeamPageTitle from "E:/ai-2025/purchase-utils/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue";
import { onContentUpdated, useData } from "vitepress";

//#region node_modules/vitepress/dist/client/theme-default/composables/data.js
const useData$1 = useData;

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/support/utils.js
function ensureStartingSlash(path) {
	return path.startsWith("/") ? path : `/${path}`;
}

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/support/sidebar.js
/**
* Get the `Sidebar` from sidebar option. This method will ensure to get correct
* sidebar config from `MultiSideBarConfig` with various path combinations such
* as matching `guide/` and `/guide/`. If no matching config was found, it will
* return empty array.
*/
function getSidebar(_sidebar, path) {
	if (Array.isArray(_sidebar)) return addBase(_sidebar);
	if (_sidebar == null) return [];
	path = ensureStartingSlash(path);
	const dir = Object.keys(_sidebar).sort((a, b) => {
		return b.split("/").length - a.split("/").length;
	}).find((dir$1) => {
		return path.startsWith(ensureStartingSlash(dir$1));
	});
	const sidebar = dir ? _sidebar[dir] : [];
	return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
/**
* Get or generate sidebar group from the given sidebar items.
*/
function getSidebarGroups(sidebar) {
	const groups = [];
	let lastGroupIndex = 0;
	for (const index in sidebar) {
		const item = sidebar[index];
		if (item.items) {
			lastGroupIndex = groups.push(item);
			continue;
		}
		if (!groups[lastGroupIndex]) groups.push({ items: [] });
		groups[lastGroupIndex].items.push(item);
	}
	return groups;
}
function addBase(items, _base) {
	return [...items].map((_item) => {
		const item = { ..._item };
		const base = item.base || _base;
		if (base && item.link) item.link = base + item.link;
		if (item.items) item.items = addBase(item.items, base);
		return item;
	});
}

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/sidebar.js
function useSidebar() {
	const { frontmatter, page, theme: theme$1 } = useData$1();
	const is960 = useMediaQuery("(min-width: 960px)");
	const isOpen = ref(false);
	const _sidebar = computed(() => {
		const sidebarConfig = theme$1.value.sidebar;
		const relativePath = page.value.relativePath;
		return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
	});
	const sidebar = ref(_sidebar.value);
	watch(_sidebar, (next, prev) => {
		if (JSON.stringify(next) !== JSON.stringify(prev)) sidebar.value = _sidebar.value;
	});
	const hasSidebar = computed(() => {
		return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
	});
	const leftAside = computed(() => {
		if (hasAside) return frontmatter.value.aside == null ? theme$1.value.aside === "left" : frontmatter.value.aside === "left";
		return false;
	});
	const hasAside = computed(() => {
		if (frontmatter.value.layout === "home") return false;
		if (frontmatter.value.aside != null) return !!frontmatter.value.aside;
		return theme$1.value.aside !== false;
	});
	const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
	const sidebarGroups = computed(() => {
		return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
	});
	function open() {
		isOpen.value = true;
	}
	function close() {
		isOpen.value = false;
	}
	function toggle() {
		isOpen.value ? close() : open();
	}
	return {
		isOpen,
		sidebar,
		sidebarGroups,
		hasSidebar,
		hasAside,
		leftAside,
		isSidebarEnabled,
		open,
		close,
		toggle
	};
}

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/outline.js
var ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
var resolvedHeaders = [];
function getHeaders(range) {
	const headers = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
		const level = Number(el.tagName[1]);
		return {
			element: el,
			title: serializeHeader(el),
			link: "#" + el.id,
			level
		};
	});
	return resolveHeaders(headers, range);
}
function serializeHeader(h) {
	let ret = "";
	for (const node of h.childNodes) if (node.nodeType === 1) {
		if (ignoreRE.test(node.className)) continue;
		ret += node.textContent;
	} else if (node.nodeType === 3) ret += node.textContent;
	return ret.trim();
}
function resolveHeaders(headers, range) {
	if (range === false) return [];
	const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
	const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
	return buildTree(headers, high, low);
}
function buildTree(data, min, max) {
	resolvedHeaders.length = 0;
	const result = [];
	const stack = [];
	data.forEach((item) => {
		const node = {
			...item,
			children: []
		};
		let parent = stack[stack.length - 1];
		while (parent && parent.level >= node.level) {
			stack.pop();
			parent = stack[stack.length - 1];
		}
		if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
			stack.push({
				level: node.level,
				shouldIgnore: true
			});
			return;
		}
		if (node.level > max || node.level < min) return;
		resolvedHeaders.push({
			element: node.element,
			link: node.link
		});
		if (parent) parent.children.push(node);
		else result.push(node);
		stack.push(node);
	});
	return result;
}

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/composables/local-nav.js
function useLocalNav() {
	const { theme: theme$1, frontmatter } = useData$1();
	const headers = shallowRef([]);
	const hasLocalNav = computed(() => {
		return headers.value.length > 0;
	});
	onContentUpdated(() => {
		headers.value = getHeaders(frontmatter.value.outline ?? theme$1.value.outline);
	});
	return {
		headers,
		hasLocalNav
	};
}

//#endregion
//#region node_modules/vitepress/dist/client/theme-default/without-fonts.js
var theme = {
	Layout,
	enhanceApp: ({ app }) => {
		app.component("Badge", VPBadge$1);
	}
};
var without_fonts_default = theme;

//#endregion
export { VPBadge, VPButton, VPDocAsideSponsors, VPFeatures, VPHomeContent, VPHomeFeatures, VPHomeHero, VPHomeSponsors, VPImage, VPLink, VPNavBarSearch, VPSocialLink, VPSocialLinks, VPSponsors, VPTeamMembers, VPTeamPage, VPTeamPageSection, VPTeamPageTitle, without_fonts_default as default, useLocalNav, useSidebar };
//# sourceMappingURL=@theme_index.js.map