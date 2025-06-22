export const urls = {
    dashboard: {
        getDashboardAnalytics: 'admin/dashboard-analytics',
        topChef: 'admin/top-chefs',
        getCustomers:'admin/get-customers',
        getMenuInsight: "admin/get-menu-insights"
    },
    order: {
        getOrders: 'admin/get-events',
        getOrder: (id:string) => 'admin/get-event/' + id,

    }
}